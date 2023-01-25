/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NPCAbilityCreateFormInputValues = {
    name?: string;
    uses?: number;
    description?: string;
    type?: string;
};
export declare type NPCAbilityCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    uses?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NPCAbilityCreateFormOverridesProps = {
    NPCAbilityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    uses?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NPCAbilityCreateFormProps = React.PropsWithChildren<{
    overrides?: NPCAbilityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NPCAbilityCreateFormInputValues) => NPCAbilityCreateFormInputValues;
    onSuccess?: (fields: NPCAbilityCreateFormInputValues) => void;
    onError?: (fields: NPCAbilityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NPCAbilityCreateFormInputValues) => NPCAbilityCreateFormInputValues;
    onValidate?: NPCAbilityCreateFormValidationValues;
} & React.CSSProperties>;
export default function NPCAbilityCreateForm(props: NPCAbilityCreateFormProps): React.ReactElement;
