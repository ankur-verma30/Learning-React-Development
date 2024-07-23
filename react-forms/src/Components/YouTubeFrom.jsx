import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const YouTubeForm = () => {
	const defaultValues = {
		username: "AnkurVerma",
		email: "ankurverma123@gmail.com",
		channel: "vipergaming",
		social: {
			twitter: "viper",
			facebook: "gaming",
		},
		phoneNumbers: ["", ""],
	};
	const form = useForm({ defaultValues: defaultValues });
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

				<label htmlFor="twitter">Twitter</label>
				<input type="text" id="twitter" {...register("social.twitter")} />

				<label htmlFor="facebook">FaceBook</label>
				<input type="text" id="facebook" {...register("social.facebook")} />

				<label htmlFor="primary-phonenumber">Primary Phone Number</label>
				<input
					type="text"
					id="primary-phonenumber"
					{...register("phoneNumbers.0")}
				/>

				<label htmlFor="secondary-phonenumber">Secondary Phone Number</label>
				<input
					type="text"
					id="secondary-phonenumber"
					{...register("phoneNumbers.1")}
				/>

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
