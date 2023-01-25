/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Combat } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CombatUpdateFormInputValues = {
    name?: string;
    pcs?: string;
};
export declare type CombatUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    pcs?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CombatUpdateFormOverridesProps = {
    CombatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    pcs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CombatUpdateFormProps = React.PropsWithChildren<{
    overrides?: CombatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    combat?: Combat;
    onSubmit?: (fields: CombatUpdateFormInputValues) => CombatUpdateFormInputValues;
    onSuccess?: (fields: CombatUpdateFormInputValues) => void;
    onError?: (fields: CombatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CombatUpdateFormInputValues) => CombatUpdateFormInputValues;
    onValidate?: CombatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CombatUpdateForm(props: CombatUpdateFormProps): React.ReactElement;
