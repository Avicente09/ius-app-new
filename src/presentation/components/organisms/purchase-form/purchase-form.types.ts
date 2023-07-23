import type { FormEventHandler } from "react";
import type { Control, FieldValues } from "react-hook-form";

export interface PurchaseFormFieldValues extends FieldValues {
    shopPlace: string,
    buyPosition: string,
    purchaseDetail: string,
    referencePhotos: string,
    /**
   * TODO: Implement real location picker
   */
    deliveryLocationl: string,
}

export interface PurchaseFormProps {
    onSubmit: FormEventHandler<HTMLFormElement>;
    control: Control<PurchaseFormFieldValues>;
}