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
export declare type CombatCreateFormInputValues = {
    name?: string;
    pcs?: string;
};
export declare type CombatCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    pcs?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CombatCreateFormOverridesProps = {
    CombatCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    pcs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CombatCreateFormProps = React.PropsWithChildren<{
    overrides?: CombatCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CombatCreateFormInputValues) => CombatCreateFormInputValues;
    onSuccess?: (fields: CombatCreateFormInputValues) => void;
    onError?: (fields: CombatCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CombatCreateFormInputValues) => CombatCreateFormInputValues;
    onValidate?: CombatCreateFormValidationValues;
} & React.CSSProperties>;
export default function CombatCreateForm(props: CombatCreateFormProps): React.ReactElement;
