const ContactForm = ({
	formData,
	handleInputChange,
	handleSubmit,
	isLoading,
	isErrorMessage,
	successMessage,
}) => {
	return (
		<form onSubmit={handleSubmit} className='form-container'>
			<div>
				<label htmlFor='name' className='form-label'>
					Name*
				</label>
				<input
					type='text'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='email' className='form-label'>
					Email*
				</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<div>
				<label htmlFor='phoneNumber' className='form-label'>
					Phone Number*
				</label>
				<input
					type='tel'
					id='phoneNumber'
					name='phoneNumber'
					value={formData.phoneNumber}
					onChange={handleInputChange}
					required
					className='form-input'
				/>
			</div>

			<div className='grid'>
				<label htmlFor='description' className='form-label'>
					Description
				</label>
				<textarea
					id='description'
					name='description'
					value={formData.description}
					onChange={handleInputChange}
					className='form-input'
					rows='4'
				></textarea>
			</div>

			<button
				type='submit'
				className={`border border-primary transition duration-700 text-xl shadow font-bold rounded ${
					isLoading ? 'opacity-50 cursor-not-allowed' : ''
				}`}
				disabled={isLoading}
			>
				{isLoading ? 'Submitting...' : 'Submit'}
			</button>

			{isErrorMessage && <p className='text-red-500'>{isErrorMessage}</p>}
			{successMessage && <p className='text-green-500'>{successMessage}</p>}
		</form>
	);
};

export default ContactForm;
