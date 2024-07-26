import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

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
		phNumbers: [{ numbers: "" }],
		age: 0,
		dob: new Date().toISOString().split("T")[0], // Set default to today's date in YYYY-MM-DD format
	};

	const form = useForm({ defaultValues: defaultValues,mode:'OnBlur' });
	const {
		register,
		control,
		handleSubmit,
		formState,
		watch,
		getValues,
		setValue,
		reset,
		trigger
	} = form;
	
	const {
		errors,
		touchedFields,
		dirtyFields,
		isDirty,
		isValid,
		isSubmitSuccessful,
		isSubmitted,
		isSubmitting,
		submitCount,
	} = formState;

	const { fields, append, remove } = useFieldArray({
		name: "phNumbers",
		control: control,
	});

	console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

	console.log({ touchedFields, dirtyFields, isDirty, isValid });

	const handlegetFieldValues = () => {
		console.log("The values are", getValues());
	};

	const handleSetFieldValues = () => {
		setValue("username", "AnkurVerma123", {
			shouldDirty: true,
			shouldValidate: true,
			shouldTouch: true,
		});
	};

	const onSubmit = (data) => {
		console.log("Form Submitted Successfully", data);
	};

	const Onerror = (errors) => {
		console.log("The error is ", errors);
	};

	// Watch the form values
	// const watchForm = watch();

	useEffect(() => {
		const subscription = watch((value) => {
			console.log(value);
		});

		return () => subscription.unsubscribe();
	}, [watch]);

	useEffect(() => {
		if (isSubmitSuccessful) reset();
	}, [isSubmitSuccessful, reset]);

	return (
		<div>
			<h1>YouTube Form</h1>
			{/* <h2>{JSON.stringify(watchForm, null, 2)}</h2> */}
			<form onSubmit={handleSubmit(onSubmit, Onerror)} noValidate>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					disabled
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
						},
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
							emailAvailable: async (fieldValue) => {
								const response = await fetch(
									`apiendpoint/user?email=${fieldValue}`
								);
								const data = await response.json();
								return data.length === 0 || "Error email already exists";
							},
						},
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}

				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					id="channel"
					{...register("channel", {
						disabled: true,
					})}
				/>

				<label htmlFor="age">Age</label>
				<input
					type="number"
					id="age"
					{...register("age", {
						valueAsNumber: true,
						required: {
							value: true,
							message: "Please enter valid age",
						},
					})}
				/>
				<p className="error">{errors.age?.message}</p>

				<label htmlFor="dob">Date of Birth</label>
				<input
					type="date"
					id="dob"
					{...register("dob", {
						valueAsDate: true,
						required: {
							value: true,
							message: "Please enter valid dob",
						},
					})}
				/>
				<p className="error">{errors.dob?.message}</p>

				<label htmlFor="twitter">Twitter</label>
				<input type="text" id="twitter" {...register("social.twitter")} />

				<label htmlFor="facebook">FaceBook</label>
				<input type="text" id="facebook" {...register("social.facebook")} />

				<label htmlFor="primary-phonenumber">Primary Phone Number</label>
				<input
					type="number"
					id="primary-phonenumber"
					{...register("phoneNumbers.0")}
				/>

				<label htmlFor="secondary-phonenumber">Secondary Phone Number</label>
				<input
					type="number"
					id="secondary-phonenumber"
					{...register("phoneNumbers.1")}
				/>

				<div>
					<label>
						List of Phone Numbers
						<div>
							{fields.map((field, index) => {
								return (
									<div className="form-control" key={field.id}>
										<input
											type="number"
											{...register(`phNumbers.${index}.numbers`)}
										/>
										{index > 0 && (
											<button type="button" onClick={() => remove(index)}>
												Remove Phone Number
											</button>
										)}
									</div>
								);
							})}
							<button type="button" onClick={() => append({ numbers: "" })}>
								Add Phone Number
							</button>
						</div>
					</label>
				</div>

				<button disabled={!isDirty || !isValid || isSubmitting}>Submit</button>
				<button type="button" onClick={handlegetFieldValues}>
					Get Values
				</button>

				<button type="button" onClick={handleSetFieldValues}>
					Set Value
				</button>

				<button type="button" onClick={() => reset()}>
					Reset Value
				</button>
				<button type="button" onClick={() => trigger()}>
					Validate
				</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
