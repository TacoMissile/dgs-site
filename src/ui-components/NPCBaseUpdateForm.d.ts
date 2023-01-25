/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NPCBase } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NPCBaseUpdateFormInputValues = {
    name?: string;
    description?: string;
    tier?: number;
    physicalSaveBase?: number;
    physicalSaveTierBonus?: number;
    esotericSaveBase?: number;
    esotericSaveTierBonus?: number;
    damageTierBonus?: number;
};
export declare type NPCBaseUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    tier?: ValidationFunction<number>;
    physicalSaveBase?: ValidationFunction<number>;
    physicalSaveTierBonus?: ValidationFunction<number>;
    esotericSaveBase?: ValidationFunction<number>;
    esotericSaveTierBonus?: ValidationFunction<number>;
    damageTierBonus?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NPCBaseUpdateFormOverridesProps = {
    NPCBaseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tier?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSaveBase?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSaveTierBonus?: PrimitiveOverrideProps<TextFieldProps>;
    esotericSaveBase?: PrimitiveOverrideProps<TextFieldProps>;
    esotericSaveTierBonus?: PrimitiveOverrideProps<TextFieldProps>;
    damageTierBonus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NPCBaseUpdateFormProps = React.PropsWithChildren<{
    overrides?: NPCBaseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nPCBase?: NPCBase;
    onSubmit?: (fields: NPCBaseUpdateFormInputValues) => NPCBaseUpdateFormInputValues;
    onSuccess?: (fields: NPCBaseUpdateFormInputValues) => void;
    onError?: (fields: NPCBaseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NPCBaseUpdateFormInputValues) => NPCBaseUpdateFormInputValues;
    onValidate?: NPCBaseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NPCBaseUpdateForm(props: NPCBaseUpdateFormProps): React.ReactElement;
