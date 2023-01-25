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
export declare type PCCharacterCreateFormInputValues = {
    name?: string;
    description?: string;
    level?: number;
    user?: string;
    gearPoints?: number;
    gearPointsMax?: number;
};
export declare type PCCharacterCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    level?: ValidationFunction<number>;
    user?: ValidationFunction<string>;
    gearPoints?: ValidationFunction<number>;
    gearPointsMax?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PCCharacterCreateFormOverridesProps = {
    PCCharacterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    gearPoints?: PrimitiveOverrideProps<TextFieldProps>;
    gearPointsMax?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PCCharacterCreateFormProps = React.PropsWithChildren<{
    overrides?: PCCharacterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PCCharacterCreateFormInputValues) => PCCharacterCreateFormInputValues;
    onSuccess?: (fields: PCCharacterCreateFormInputValues) => void;
    onError?: (fields: PCCharacterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PCCharacterCreateFormInputValues) => PCCharacterCreateFormInputValues;
    onValidate?: PCCharacterCreateFormValidationValues;
} & React.CSSProperties>;
export default function PCCharacterCreateForm(props: PCCharacterCreateFormProps): React.ReactElement;
