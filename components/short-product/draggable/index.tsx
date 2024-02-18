"use client";

import React, { useEffect } from "react";
import "./draggable.scss";

function Draggable({ children }: any) {
	useEffect(() => {
		const sortableList: any = document.querySelector(".sortable-list");
		const items: any = sortableList.querySelectorAll(".item");

		items.forEach((item: any) => {
			item.addEventListener("dragstart", () => {
				// Adding dragging class to item after a delay
				setTimeout(() => item.classList.add("dragging"), 0);
			});
			// Removing dragging class from item on dragend event
			item.addEventListener("dragend", () => item.classList.remove("dragging"));
		});

		const initSortableList = (e: any) => {
			e.preventDefault();
			const draggingItem = document.querySelector(".dragging");
			// Getting all items except currently dragging and making array of them
			let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

			// Finding the sibling after which the dragging item should be placed
			let nextSibling = siblings.find((sibling) => {
				return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
			});

			// Inserting the dragging item before the found sibling
			sortableList.insertBefore(draggingItem, nextSibling);
			console.log(sortableList);
		};

		sortableList.addEventListener("dragover", initSortableList);
		sortableList.addEventListener("dragenter", (e: any) => e.preventDefault());
	}, []);

	const data = [
		{
			id: 1,
			img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&w=1000&q=80",
			title: "Title 1 ",
		},
		{
			id: 2,
			img: "https://transmedic.co.id:7772/images/profile/user-uploads/user-01.jpg",
			title: "Title 2",
		},
		{
			id: 3,
			img: "https://transmedic.co.id:7772/images/profile/user-uploads/user-02.jpg",
			title: "Title 3 ",
		},
		{
			id: 4,
			img: "https://transmedic.co.id:7772/images/profile/user-uploads/user-03.jpg",
			title: "Title 4 ",
		},
		{
			id: 5,
			img: "https://transmedic.co.id:7772/images/profile/user-uploads/user-04.jpg",
			title: "Title 5 ",
		},
		{
			id: 5,
			img: "https://transmedic.co.id:7772/images/profile/user-uploads/user-05.jpg",
			title: "Title 5 ",
		},
	];

	return (
		<div className="draggable">
			<ul className="sortable-list">
				{data?.map((item: any) => (
					<li className="item" draggable="true">
						<div className="details">
							<img src={item.img} alt="" />
							<span>{item.title}</span>
						</div>
						<span>=</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Draggable;
