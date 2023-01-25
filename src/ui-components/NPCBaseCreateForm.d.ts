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
export declare type NPCBaseCreateFormInputValues = {
    name?: string;
    description?: string;
    tier?: number;
    physicalSaveBase?: number;
    physicalSaveTierBonus?: number;
    esotericSaveBase?: number;
    esotericSaveTierBonus?: number;
    damageTierBonus?: number;
};
export declare type NPCBaseCreateFormValidationValues = {
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
export declare type NPCBaseCreateFormOverridesProps = {
    NPCBaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tier?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSaveBase?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSaveTierBonus?: PrimitiveOverrideProps<TextFieldProps>;
    esotericSaveBase?: PrimitiveOverrideProps<TextFieldProps>;
    esotericSaveTierBonus?: PrimitiveOverrideProps<TextFieldProps>;
    damageTierBonus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NPCBaseCreateFormProps = React.PropsWithChildren<{
    overrides?: NPCBaseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NPCBaseCreateFormInputValues) => NPCBaseCreateFormInputValues;
    onSuccess?: (fields: NPCBaseCreateFormInputValues) => void;
    onError?: (fields: NPCBaseCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NPCBaseCreateFormInputValues) => NPCBaseCreateFormInputValues;
    onValidate?: NPCBaseCreateFormValidationValues;
} & React.CSSProperties>;
export default function NPCBaseCreateForm(props: NPCBaseCreateFormProps): React.ReactElement;
