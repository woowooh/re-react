import Button, {BaseButtonProps, ButtonType} from './button'


function PrimaryButton(props: BaseButtonProps) {
    const {
        children,
        size,
    } = props
    return (
        <Button btnType={ButtonType.Primary} size={size}>
            {children}
        </Button>
    )
}

export default PrimaryButton