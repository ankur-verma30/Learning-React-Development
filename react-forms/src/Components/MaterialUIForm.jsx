import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const MaterialUIForm = () => {
	const defaultValues = {
		email: "ankurverma@gmail.com",
		password: "",
	};
	const form = useForm({ defaultValues: defaultValues });

	const onSubmit = (data) => {
		console.log("Form submitted successfully", data);
	};

	const { register, handleSubmit, formState,control } = form;
	const { errors } = formState;
	return (
		<div>
			<h1>Login Form</h1>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Stack spacing={2} width={400}>
				<TextField
					label="Email"
					type="email"
					{...register("email", {
						required: "Email is required",
					})}
					error={!!errors.email}
					helperText={errors.email?.message}
				/>
				<TextField
					label="password"
					type="password"
					{...register("password", {
						required: "Password is required",
					})}
					error={!!errors.password}
					helperText={errors.password?.message}
				/>
				<Button type="submit" variant="contained" color="primary">
					Login
				</Button>
			</Stack>
            </form>
            <DevTool control={control}/>
		</div>
	);
};
