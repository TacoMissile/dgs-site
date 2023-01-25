/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { NPCBase } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NPCBaseUpdateForm(props) {
  const {
    id: idProp,
    nPCBase,
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
    tier: "",
    physicalSaveBase: "",
    physicalSaveTierBonus: "",
    esotericSaveBase: "",
    esotericSaveTierBonus: "",
    damageTierBonus: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [tier, setTier] = React.useState(initialValues.tier);
  const [physicalSaveBase, setPhysicalSaveBase] = React.useState(
    initialValues.physicalSaveBase
  );
  const [physicalSaveTierBonus, setPhysicalSaveTierBonus] = React.useState(
    initialValues.physicalSaveTierBonus
  );
  const [esotericSaveBase, setEsotericSaveBase] = React.useState(
    initialValues.esotericSaveBase
  );
  const [esotericSaveTierBonus, setEsotericSaveTierBonus] = React.useState(
    initialValues.esotericSaveTierBonus
  );
  const [damageTierBonus, setDamageTierBonus] = React.useState(
    initialValues.damageTierBonus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = nPCBaseRecord
      ? { ...initialValues, ...nPCBaseRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setTier(cleanValues.tier);
    setPhysicalSaveBase(cleanValues.physicalSaveBase);
    setPhysicalSaveTierBonus(cleanValues.physicalSaveTierBonus);
    setEsotericSaveBase(cleanValues.esotericSaveBase);
    setEsotericSaveTierBonus(cleanValues.esotericSaveTierBonus);
    setDamageTierBonus(cleanValues.damageTierBonus);
    setErrors({});
  };
  const [nPCBaseRecord, setNPCBaseRecord] = React.useState(nPCBase);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(NPCBase, idProp) : nPCBase;
      setNPCBaseRecord(record);
    };
    queryData();
  }, [idProp, nPCBase]);
  React.useEffect(resetStateValues, [nPCBaseRecord]);
  const validations = {
    name: [],
    description: [],
    tier: [],
    physicalSaveBase: [],
    physicalSaveTierBonus: [],
    esotericSaveBase: [],
    esotericSaveTierBonus: [],
    damageTierBonus: [],
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
          tier,
          physicalSaveBase,
          physicalSaveTierBonus,
          esotericSaveBase,
          esotericSaveTierBonus,
          damageTierBonus,
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
            NPCBase.copyOf(nPCBaseRecord, (updated) => {
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
      {...getOverrideProps(overrides, "NPCBaseUpdateForm")}
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
              tier,
              physicalSaveBase,
              physicalSaveTierBonus,
              esotericSaveBase,
              esotericSaveTierBonus,
              damageTierBonus,
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
              tier,
              physicalSaveBase,
              physicalSaveTierBonus,
              esotericSaveBase,
              esotericSaveTierBonus,
              damageTierBonus,
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
        label="Tier"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tier}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              tier: value,
              physicalSaveBase,
              physicalSaveTierBonus,
              esotericSaveBase,
              esotericSaveTierBonus,
              damageTierBonus,
            };
            const result = onChange(modelFields);
            value = result?.tier ?? value;
          }
          if (errors.tier?.hasError) {
            runValidationTasks("tier", value);
          }
          setTier(value);
        }}
        onBlur={() => runValidationTasks("tier", tier)}
        errorMessage={errors.tier?.errorMessage}
        hasError={errors.tier?.hasError}
        {...getOverrideProps(overrides, "tier")}
      ></TextField>
      <TextField
        label="Physical save base"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={physicalSaveBase}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              tier,
              physicalSaveBase: value,
              physicalSaveTierBonus,
              esotericSaveBase,
              esotericSaveTierBonus,
              damageTierBonus,
            };
            const result = onChange(modelFields);
            value = result?.physicalSaveBase ?? value;
          }
          if (errors.physicalSaveBase?.hasError) {
            runValidationTasks("physicalSaveBase", value);
          }
          setPhysicalSaveBase(value);
        }}
        onBlur={() => runValidationTasks("physicalSaveBase", physicalSaveBase)}
        errorMessage={errors.physicalSaveBase?.errorMessage}
        hasError={errors.physicalSaveBase?.hasError}
        {...getOverrideProps(overrides, "physicalSaveBase")}
      ></TextField>
      <TextField
        label="Physical save tier bonus"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={physicalSaveTierBonus}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              tier,
              physicalSaveBase,
              physicalSaveTierBonus: value,
              esotericSaveBase,
              esotericSaveTierBonus,
              damageTierBonus,
            };
            const result = onChange(modelFields);
            value = result?.physicalSaveTierBonus ?? value;
          }
          if (errors.physicalSaveTierBonus?.hasError) {
            runValidationTasks("physicalSaveTierBonus", value);
          }
          setPhysicalSaveTierBonus(value);
        }}
        onBlur={() =>
          runValidationTasks("physicalSaveTierBonus", physicalSaveTierBonus)
        }
        errorMessage={errors.physicalSaveTierBonus?.errorMessage}
        hasError={errors.physicalSaveTierBonus?.hasError}
        {...getOverrideProps(overrides, "physicalSaveTierBonus")}
      ></TextField>
      <TextField
        label="Esoteric save base"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={esotericSaveBase}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              tier,
              physicalSaveBase,
              physicalSaveTierBonus,
              esotericSaveBase: value,
              esotericSaveTierBonus,
              damageTierBonus,
            };
            const result = onChange(modelFields);
            value = result?.esotericSaveBase ?? value;
          }
          if (errors.esotericSaveBase?.hasError) {
            runValidationTasks("esotericSaveBase", value);
          }
          setEsotericSaveBase(value);
        }}
        onBlur={() => runValidationTasks("esotericSaveBase", esotericSaveBase)}
        errorMessage={errors.esotericSaveBase?.errorMessage}
        hasError={errors.esotericSaveBase?.hasError}
        {...getOverrideProps(overrides, "esotericSaveBase")}
      ></TextField>
      <TextField
        label="Esoteric save tier bonus"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={esotericSaveTierBonus}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              tier,
              physicalSaveBase,
              physicalSaveTierBonus,
              esotericSaveBase,
              esotericSaveTierBonus: value,
              damageTierBonus,
            };
            const result = onChange(modelFields);
            value = result?.esotericSaveTierBonus ?? value;
          }
          if (errors.esotericSaveTierBonus?.hasError) {
            runValidationTasks("esotericSaveTierBonus", value);
          }
          setEsotericSaveTierBonus(value);
        }}
        onBlur={() =>
          runValidationTasks("esotericSaveTierBonus", esotericSaveTierBonus)
        }
        errorMessage={errors.esotericSaveTierBonus?.errorMessage}
        hasError={errors.esotericSaveTierBonus?.hasError}
        {...getOverrideProps(overrides, "esotericSaveTierBonus")}
      ></TextField>
      <TextField
        label="Damage tier bonus"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={damageTierBonus}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              tier,
              physicalSaveBase,
              physicalSaveTierBonus,
              esotericSaveBase,
              esotericSaveTierBonus,
              damageTierBonus: value,
            };
            const result = onChange(modelFields);
            value = result?.damageTierBonus ?? value;
          }
          if (errors.damageTierBonus?.hasError) {
            runValidationTasks("damageTierBonus", value);
          }
          setDamageTierBonus(value);
        }}
        onBlur={() => runValidationTasks("damageTierBonus", damageTierBonus)}
        errorMessage={errors.damageTierBonus?.errorMessage}
        hasError={errors.damageTierBonus?.hasError}
        {...getOverrideProps(overrides, "damageTierBonus")}
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
          isDisabled={!(idProp || nPCBase)}
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
              !(idProp || nPCBase) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
