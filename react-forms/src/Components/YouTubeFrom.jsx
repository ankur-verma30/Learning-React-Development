import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const YouTubeForm = () => {
	const form = useForm();
	const { register, control, handleSubmit, formState } = form;
	const { errors } = formState;

	const onSubmit = (data) => {
		console.log("Form Submitted Successfully", data);
	};

	return (
		<div>
			<h1>YouTube Form</h1>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					{...register("username", {
						required: {
							value: true,
							message: "Please enter valid username",
						},
					})}
				/>
				<p className="error">{errors.username?.message}</p>

				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					{...register("email", {
						pattern: {
							value:
								/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							message: "Invalid Email Format",
							validate: {
								notAdmin: (fieldValue) => {
									return (
										fieldValue !== "admin123@gmail.com" ||
										"Enter a different email"
									);
								},
								notBlacklisted: (fieldValue) => {
									return (
										!fieldValue.endsWith("baddomain.com") ||
										"this domain is not supported"
									);
								},
							}, 
						},
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}

				<label htmlFor="channel">Channel</label>
				<input type="text" id="channel" {...register("channel")} />

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
