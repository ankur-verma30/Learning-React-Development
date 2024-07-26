import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
	username: yup.string().required("username is required"),
	email: yup
		.string()
		.email("email format is not valid")
		.required("email is required"),
	channel: yup.string().required("channel is required"),
});

export const YupYouTubeForm = () => {
    const defaultValues={
        username:'Ankur Verma',
        email:'ankurverma@gmail.com',
        channel:'viper_gaming',
    }
	const form = useForm({defaultValues:defaultValues,resolver:yupResolver(schema)});
	const { handleSubmit, register, formState,control } = form;
	const { errors } = formState;

	const onSubmit = () => {
		console.log("Form submission successful");
	};

	return (
		<div>
			<h1>Yup YouTube Form</h1>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className="form-control">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						{...register("username")}
					/>
					<p className="error">{errors.username?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" {...register("email")} />
					<p className="error">{errors.email?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						name="channel"
						id="channel"
						{...register("channel")}
					/>
					<p className="error">{errors.channel?.message}</p>
				</div>
				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
}

