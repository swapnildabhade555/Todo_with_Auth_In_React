import Logo from "./Logo";


export default function Header() {
    return (
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-b-[rgba(0,0,0,0.04)] flex justify-between items-center px-[28px] py-[0]">
            <Logo />

            <p><b>0</b> / 0 Todos Completed</p>
        </header>
    );
}