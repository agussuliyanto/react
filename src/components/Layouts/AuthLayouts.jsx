const AuthLayout = (props) => {
    const { children, title } = props;
    return (
        <div className="flex justify-center bg-neutral-100 min-h-screen items-center">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {title}
                    </h2>
                </div>
                {/* Input Form */}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {children}
                </div>
                {/* Akhir Input Form */}
            </div>
        </div>
    );
};

export default AuthLayout;