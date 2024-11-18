import { useState } from "react";

const FormComponent = () => {
    const [form, setForm] = useState({ email: "", userName: "", password: "", course: "", country: "", age: "", sex: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${JSON.stringify(form)}`);
    };

    return (
        <div className=" mt-7 ">
            <div>
                <h1 className="mb-5 text-4xl text-white bg-black inline-block ">
                    FORM
                </h1>
            </div>
            <form className=" flex flex-col ">
                <label className="m-5" htmlFor="userName">User Name <b>: </b>
                        <input type="text" name="userName" value={form.userName} onChange={handleChange}    placeholder="Username" />
                </label>
                <label className="m-5" htmlFor="password">Password <b>: </b>
                        <input type="password" name="password" value={form.password} onChange={handleChange}    placeholder="Password" />
                </label>
                <label className="m-5" htmlFor="email"> Email <b>: </b>
                    <input className="ml-5 w-1/4" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                </label>
                <label className="m-2" htmlFor="course">Course <b>: </b>
                        <select className="m-5" name="course" value={form.course} onChange={handleChange}>
                            <option value="">Select Course</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Photography">Photography</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Data Analysis">Data Analysis</option>
                        </select>
                </label>
                <label className="m-5" htmlFor="country"> Country <b>: </b>
                    <input className="ml-5 w-1/4" type="country" name="country" value={form.country} onChange={handleChange} placeholder="Country" />
                </label>
                <label className="m-5" htmlFor="number"> AGE <b>: </b>
                    <input className="ml-5 w-1/4" type="number" name="age" value={form.age} onChange={handleChange} placeholder="AGE" />
                </label>
                <label>Sex <b>:</b>
                    <input type="radio" name="sex" value="Male" onChange={handleChange} />Male
                    <input type="radio" name="sex" value="Female" onChange={handleChange} />Female
                </label>
                    <button className="bg-gray-800 w-56 h-10 text-white rounded m-auto" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default FormComponent;

