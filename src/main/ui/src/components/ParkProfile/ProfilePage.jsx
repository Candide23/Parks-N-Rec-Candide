import {React, useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import ProfileHeroImage from "./ProfileHeroImage";
import { API_KEY } from "../../api";


export default function ProfilePage() {
	const [parkData, setParkData] = useState([]);

	useEffect(() => {
		fetch(`https://developer.nps.gov/api/v1/parks?parkCode="yell"a&api_key=${API_KEY}`)
			.then((response) => response.json())
			.then((json) => {
				setParkData(json.data);
			});
	}, []);

	return (
		<div>
			<div
			className="bg-image "
			style={{
				backgroundImage: `url(${parkData.images[0].url})`,
				height: 500,
			}}
		>
			<div
				className="mask bg-gradient"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: 500 }}
			>
				<div className="d-flex justify-content-center align-items-center bg-image h-100">
					<div className="text-white">
						<h1 className="mb-3">Find Your Park</h1>
						{/* <SearchBar /> */}
						<a className="btn btn-outline-light btn-lg" href="#!" role="button">
							Search
						</a>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}
