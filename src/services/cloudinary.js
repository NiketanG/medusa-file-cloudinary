import fs from "fs";

import { v2 as cloudinary } from "cloudinary";
import { FileService } from "medusa-interfaces";

class CloudinaryService extends FileService {
	constructor({}, options) {
		super();

        cloudinary.config({
            cloud_name: options.cloud_name,
			api_key: options.api_key,
			api_secret: options.api_secret,
			secure: options.secure || true,
        });
	}

	// File upload
	upload(file) {
		return new Promise((resolve, reject) => {
			var upload_stream = cloudinary.uploader.upload_stream(
				{},
				function (err, image) {
					if (err) {
						console.error(err);
						reject(err);
						return;
					}
					resolve({ url: image.url });
				}
			);
			fs.createReadStream(file.path).pipe(upload_stream);
		});
	}

	delete(file) {
		// file is the url of image. We have to extract the public id from url
		let publicId;
		if (
			typeof file === "string" &&
			file.toLowerCase().includes("cloudinary")
		) {
			// Remove the last '/' before public id and '.' before file extension
			publicId = file.substring(
				file.lastIndexOf("/") + 1,
				file.lastIndexOf(".")
			);
		} else {
			publicId = file;
		}
		cloudinary.uploader.destroy(publicId, function (result) {
			resolve(result);
		});
	}
}

export default CloudinaryService;
