/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PCCharacter } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PCCharacterUpdateForm(props) {
  const {
    id: idProp,
    pCCharacter,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    level: "",
    user: "",
    gearPoints: "",
    gearPointsMax: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [level, setLevel] = React.useState(initialValues.level);
  const [user, setUser] = React.useState(initialValues.user);
  const [gearPoints, setGearPoints] = React.useState(initialValues.gearPoints);
  const [gearPointsMax, setGearPointsMax] = React.useState(
    initialValues.gearPointsMax
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pCCharacterRecord
      ? { ...initialValues, ...pCCharacterRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setLevel(cleanValues.level);
    setUser(cleanValues.user);
    setGearPoints(cleanValues.gearPoints);
    setGearPointsMax(cleanValues.gearPointsMax);
    setErrors({});
  };
  const [pCCharacterRecord, setPCCharacterRecord] = React.useState(pCCharacter);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PCCharacter, idProp)
        : pCCharacter;
      setPCCharacterRecord(record);
    };
    queryData();
  }, [idProp, pCCharacter]);
  React.useEffect(resetStateValues, [pCCharacterRecord]);
  const validations = {
    name: [],
    description: [],
    level: [],
    user: [],
    gearPoints: [],
    gearPointsMax: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          level,
          user,
          gearPoints,
          gearPointsMax,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PCCharacter.copyOf(pCCharacterRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PCCharacterUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              level,
              user,
              gearPoints,
              gearPointsMax,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              level,
              user,
              gearPoints,
              gearPointsMax,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Level"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={level}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              level: value,
              user,
              gearPoints,
              gearPointsMax,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      ></TextField>
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              user: value,
              gearPoints,
              gearPointsMax,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
      ></TextField>
      <TextField
        label="Gear points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={gearPoints}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              user,
              gearPoints: value,
              gearPointsMax,
            };
            const result = onChange(modelFields);
            value = result?.gearPoints ?? value;
          }
          if (errors.gearPoints?.hasError) {
            runValidationTasks("gearPoints", value);
          }
          setGearPoints(value);
        }}
        onBlur={() => runValidationTasks("gearPoints", gearPoints)}
        errorMessage={errors.gearPoints?.errorMessage}
        hasError={errors.gearPoints?.hasError}
        {...getOverrideProps(overrides, "gearPoints")}
      ></TextField>
      <TextField
        label="Gear points max"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={gearPointsMax}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              user,
              gearPoints,
              gearPointsMax: value,
            };
            const result = onChange(modelFields);
            value = result?.gearPointsMax ?? value;
          }
          if (errors.gearPointsMax?.hasError) {
            runValidationTasks("gearPointsMax", value);
          }
          setGearPointsMax(value);
        }}
        onBlur={() => runValidationTasks("gearPointsMax", gearPointsMax)}
        errorMessage={errors.gearPointsMax?.errorMessage}
        hasError={errors.gearPointsMax?.hasError}
        {...getOverrideProps(overrides, "gearPointsMax")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pCCharacter)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pCCharacter) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
