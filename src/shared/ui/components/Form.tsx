import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { Iform } from "../../../models/types/Forms";
import { ClipLoader } from "react-spinners";
import FaDarkButton from "./buttons/FaDarkButton";
import { Hourglass } from "react-loader-spinner";

export default function Form({
  Action,
  Map,
  HandleChange,
  OnSubmit,
  Values,
  isLoading,
  SubmitText,
  Width,
  Height,
  Display = "col",
  GenError,
  InputBG,
  SubmitColor,
  SubmitTextColor,
  GenTextStyle,
}: {
  Action: string;
  Map: Array<Iform>;
  HandleChange: ChangeEventHandler;
  OnSubmit: FormEventHandler;
  Values: any;
  isLoading: boolean;
  SubmitText: string;
  Width?: string;
  Height?: string;
  Display?: string;
  GenError: string;
  InputBG?: string;
  SubmitColor?: string;
  SubmitTextColor?: string;
  GenTextStyle?: string;
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500); // Duración de la animación

    return () => clearTimeout(timeout);
  }, [Map]);

  return (
    <form
      action={Action}
      className={`flex ${
        Display === "flex" ? "flex-row" : "flex-col"
      } text-start gap-4 justify-center transition-transform ${animate ? "animate-slide-in" : ""} ${GenTextStyle}`}
      onSubmit={OnSubmit}
      style={{ width: Width, height: Height }}
    >
      {Map.map((current, index) => (
        <div key={index} className="flex flex-col">
          <span className="mr-3">{current.label}</span>
          {current.type === "textarea" ? (
            <textarea
              maxLength={current.maxLength ?? 500}
              minLength={current.minLength ?? 0}
              className={`rounded-sm border border-zinc-700 resize-none p-1`}
              style={{ backgroundColor: InputBG, width: current.width, height: current.height }} // Estilo dinámico
              name={current.valueName}
              required={current.required}
              onChange={HandleChange}
              value={Values[current.valueName] || ""}
              placeholder={current.placeHolder}
            ></textarea>
          ) : current.type === "select" ? (
            <select
              className={`rounded-sm border border-zinc-700 p-1`}
              style={{ backgroundColor: InputBG, width: current.width, height: current.height }} // Estilo dinámico
              name={current.valueName}
              onChange={HandleChange}
              value={Values[current.valueName] || ""}
            >
              {current.options?.map((option: string, optionIndex: number) => (
                <option key={optionIndex} className={GenTextStyle} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={current.type}
              maxLength={current.maxLength ?? 300}
              minLength={current.minLength ?? 0}
              className={`rounded-sm border border-spacing-8 border-zinc-700 p-1`}
              style={{ backgroundColor: InputBG, width: current.width, height: current.height }} // Estilo dinámico
              name={current.valueName}
              required={current.required}
              onChange={HandleChange}
              value={Values[current.valueName] || ""}
              placeholder={current.placeHolder}
            />
          )}
        </div>
      ))}
      {GenError && <p className="text-red-500">{GenError}</p>}
      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <Hourglass height={32} width={32} />
        </div>
      ) : (
        <FaDarkButton color={SubmitColor} text={SubmitTextColor}>
          <input type="submit" value={SubmitText} />
        </FaDarkButton>
      )}
    </form>
  );
}