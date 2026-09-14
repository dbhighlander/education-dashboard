"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { useState } from "react";
import LoadingSpinner from "./ui/LoadingSpinner";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <LoadingSpinner />,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <LoadingSpinner />,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
        ? "bg-lamaSky"
        : "bg-lamaPurple";

  const Form = () => {
    return type === "delete" && id ? (
      <form className="p-4 flex flex-col gap-4" action="">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found"
    );
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
          >
            <Image src={`/${type}.png`} width={16} height={16} alt="" />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 fixed left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <Dialog.Content className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
              <Form />
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 cursor-pointer" aria-label="Close">
                  <Image src="/close.png" alt="" width={14} height={14} />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default FormModal;
