import React from "react";
import {useForm} from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  //   const onSubmit = data => console.log(data);

  function onSubmit(data) {
    console.log(data);
  }

  const userEmail = {
    required: {
      value: true,
      message: "이메일은 필수 입니다.",
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: "이메일을 입력",
    },
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
  };

  const userPassword = {
    required: {
      value: true,
      message: "비밀번호는 필수 입니다.",
    },
    minLength: {
      value: 4,
      message: "최소 4자입니다.",
    },
  };

  return (
    <section className="flex max-w-[400px]  m-auto mt-20 rounded-md shadow-md border bg-white">
      <div className="p-6 w-full">
        <h2 className="text-center text-2xl font-semibold mb-4">로그인</h2>
        <hr className="mb-4" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500 mb-2 flex"
            >
              이메일
            </label>
            <input
              type="text"
              id="email"
              className="border w-full rounded-md p-2 text-xs"
              placeholder="이메일을 입력하세요"
              {...register("email", userEmail)}
            />
            {errors.email && (
              <div className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="mb-1">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-500 mb-2 flex"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="border w-full rounded-md p-2 text-xs"
              placeholder="비밀번호를 입력하세요"
              {...register("password", userPassword)}
            />
            {errors.password && (
              <div className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <button className="w-full bg-gray-800 rounded-md text-white py-2 hover:bg-gray-500">
              로그인
            </button>
          </div>
          <div className="text-center text-xs">
            아이디가 없다면 <a href="/register">회원가입</a> 하세요
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
