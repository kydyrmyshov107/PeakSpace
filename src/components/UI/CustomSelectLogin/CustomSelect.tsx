import scss from "./CustomSelect.module.scss";
const CustomSelect = () => {
	return (
		<>
			<div className={scss.container}>
				<div className={scss.content}>
					<select name="fdf">
						{" "}
						<option className={scss.option} value="rewrw">
							БАТКЕН
						</option>
					</select>
				</div>
			</div>
		</>
	);
};

export default CustomSelect;
