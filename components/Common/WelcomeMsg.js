import { Icon, Message, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
    const router = useRouter();
    const atSignup = router.pathname === "/signup";
    return (
        <Message
            attached
            header={atSignup ? "Get started" : "Welcome back"}
            icon={atSignup ? "settings" : "privacy"}
        />
    );
};

export const FootMessage = () => {};
