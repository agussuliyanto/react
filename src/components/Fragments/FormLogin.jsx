import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form className="space-y-6" action="#" method="POST">
            <InputForm label="Email" name="email" type="email" placeholder="contoh@gmail.com" />
            <InputForm label="Password" name="password" type="password" placeholder="Masukkan Password" />

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Log in
                </button>
            </div>
            <div>
                <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Lupa password?
                        </a>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormLogin;