import { FC, InputHTMLAttributes } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
    formName: string;
    formLabel: string;
    formType: string;
    placeHolder?: string;
    className?: string;
    disabled?: boolean;
}

const InputComponent: FC<InputProps> = ({
    control,
    formName,
    formLabel,
    formType,
    placeHolder = "",
    className = "",
    disabled = false,
    ...rest 
}) => {
    return (
        <FormField
            control={control}
            name={formName}
            render={({ field }) => (
                <FormItem 
                    className={className ? className : "w-full"}
                    {...rest}
                >
                    <FormLabel>{formLabel}</FormLabel>
                    <FormControl>
                        <Input
                            type={formType}
                            placeholder={placeHolder}
                            {...field}
                            disabled={disabled}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default InputComponent