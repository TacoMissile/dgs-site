/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NPCAbility } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NPCAbilityUpdateFormInputValues = {
    name?: string;
    uses?: number;
    description?: string;
    type?: string;
};
export declare type NPCAbilityUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    uses?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NPCAbilityUpdateFormOverridesProps = {
    NPCAbilityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    uses?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NPCAbilityUpdateFormProps = React.PropsWithChildren<{
    overrides?: NPCAbilityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nPCAbility?: NPCAbility;
    onSubmit?: (fields: NPCAbilityUpdateFormInputValues) => NPCAbilityUpdateFormInputValues;
    onSuccess?: (fields: NPCAbilityUpdateFormInputValues) => void;
    onError?: (fields: NPCAbilityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NPCAbilityUpdateFormInputValues) => NPCAbilityUpdateFormInputValues;
    onValidate?: NPCAbilityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NPCAbilityUpdateForm(props: NPCAbilityUpdateFormProps): React.ReactElement;
