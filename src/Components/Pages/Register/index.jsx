import React from "react";
import RegisterWrapper from "./style";
import Container from "../../Common/Container";
import { Controller, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { DatePicker } from "antd";
import Select from "react-select";
import car from './car.json'

const Register = () => {
  const { register, handleSubmit, control, reset, setValue } = useForm();
    const [markId, setMarkId] = React.useState(null);
    const [model, setModel] = React.useState(null);

    const option = car.map((item) => {
        return {
            value: item.brand,
            label: item.brand,
        };
    });

    const optionModel = car.filter((item) => item.brand === markId).map((item) => {
        return {
            value: item.models.flatMap((item) => item),
            label: item.models.map((item) => item),
        };
    });

    console.log(optionModel);

  return (
    <RegisterWrapper>
      <Container>
        <div className="top">
          <h1>Register</h1>
        </div>
        <form className="p-3">
          <div className="label">
            <label>Ismi</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Ismi"}
              {...register("firstname", { required: true })}
            />
          </div>
          <div className="label">
            <label>Familyasi</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Familyasi"}
              {...register("lastname", { required: true })}
            />
          </div>
          <div className="label">
            <label>Sharifi</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Sharifi"}
              {...register("fathername", { required: true })}
            />
          </div>
          <div className="label">
            <label>Telefon raqami</label>
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 16,
                maxLength: 16,
              }}
              name="phonenumber"
              render={({ field: { onChange, onBlur, value } }) => (
                <PatternFormat
                  format="+998## ### ## ##"
                  allowEmptyFormatting
                  name="phonenumber"
                  value={value}
                  style={{ width: "100%" }}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </div>
          <div className="label">
            <label>Manzil</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Manzil"}
              {...register("manzil", { required: true })}
            />
          </div>
          <div className="label">
            <label>Pasport seriya va raqami</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Passport seriya va raqami"}
              {...register("passport", { required: true })}
            />
          </div>
          <div className="label">
            <label>Kim tomonidan berilgan</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Kim tomonidan berilgan"}
              {...register("givenpalace", { required: true })}
            />
          </div>
          <div className="label-date">
            <label>Berilgan sanasi</label>
            <Controller
              control={control}
              name="givendate"
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker onChange={onChange} placeholder="Berilgan sanasi"/>
              )}
            />
          </div>
          <div className="label-date">
            <label>Yaroqlilik muddati</label>
            <Controller
              control={control}
              name="duedate"
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker onChange={onChange} placeholder="Yaroqlilik muddati" />
              )}
            />
          </div>
          <div className="label">
          <label>Mashina markasi</label>
          <Controller
            control={control}
            name="markType"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Select
                className="select col-3 w-100"
                value={value}
                placeholder="Mashina markasi"
                options={option}
                onBlur={onBlur}
                onChange={(v) => {
                  onChange(v);
                  console.log(v);
                  setMarkId(v.value);
                }}
                ref={ref}
              />
            )}
          />
        </div>

          <div className="label">
            <label>Mashina modeli</label>
            <Controller
            control={control}
            name="modelType"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Select
                className="select col-3 w-100"
                value={value}
                placeholder="Mashina modeli"
                options={optionModel}
                onBlur={onBlur}
                onChange={(v) => {
                  onChange(v);
                  console.log(v);
                  setModel(v.value);
                }}
                ref={ref}
              />
            )}
          />
          </div>
          <div className="label">
            <label>Rangi</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Rangi"}
              {...register("color", { required: true })}
            />
          </div>
          <div className="label">
            <label>Davlat raqami</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Davlat raqami"}
              {...register("carnumber", { required: true })}
            />
          </div>
          <div className="label">
            <label>Chiqarilgan yili</label>
            <input
              autoComplete="off"
              className="form-control"
              placeholder={"Chiqarilgan yili"}
              {...register("caryear", { required: true })}
            />
          </div>

          <button type="submit">
          Registratsiya
          </button>

        </form>
      </Container>
    </RegisterWrapper>
  );
};

export default Register;
