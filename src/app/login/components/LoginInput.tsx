import css from './LoginInput.module.css'

export default function LoginInput({ placeholder, type, input, setInput }: {
    placeholder: string,
    type?: string,
    input: string,
    setInput: (value: string) => void
}){

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <input
            className={css.login_input}
            placeholder={placeholder}
            type={type}
            value={input}
            onChange={handleChange}
        ></input>
    );
}