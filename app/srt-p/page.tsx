import ImagePlaceholder from "@/components/short-product/image-placeholder";
import Link from "next/link";
import React from "react";

function ShortP() {
	return (
		<div className="container">
			<div className="row mt-5">
				<div className="text-center">
					<Link href="/srt-p/image-placeholder" style={{ display: "block" }}>
						Image placeholder
					</Link>
					<Link href="/srt-p/date-range-picker" style={{ display: "block" }}>
						Date Range Picker
					</Link>
					<Link href="/srt-p/draggable" style={{ display: "block" }}>
						Draggable
					</Link>
					<Link href="/srt-p/draggable-model" style={{ display: "block" }}>
						Draggable Model
					</Link>
					<Link href="/srt-p/generate-captcha" style={{ display: "block" }}>
						Generate Captcha
					</Link>
					<Link href="/srt-p/image-editor" style={{ display: "block" }}>
						Image Editor
					</Link>
					<Link href="/srt-p/speech-converter" style={{ display: "block" }}>
						Speech Converter
					</Link>
					<Link href="/srt-p/tic-tac-toe" style={{ display: "block" }}>
						Tic Tac
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ShortP;
