import { useForm } from "react-hook-form"

type FormValues = {
    firstName: string,
    lastName: string,
    age: string,
    gender: string,
    developer: string
};

export default function ReactForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
    // console.log(watch())
    console.log({ errors })
    return (
        <>

            <div className="container">
                <form onSubmit={handleSubmit(data => {
                    console.log(data)
                })}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input {...register("firstName", { required:'first name is required'})} type="text" className="form-control" placeholder="Enter first name" />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">LastName</label>
                        <input {...register("lastName")} type="text" className="form-control" placeholder="ener last name" />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputAge">Age</label>
                        <input {...register("age", { required: 'age is required', valueAsNumber: true })} type="text" className="form-control" placeholder="ener your age" />
                        {errors.age && <p>{errors.age.message}</p>}
                    </div>
                    {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

            {/* <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <h7>firstMame</h7>
                <input {...register("firstName", { required: true })} />
                <button>submit </button>
            </form> */}
        </>
    )
}