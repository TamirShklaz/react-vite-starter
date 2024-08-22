import {cn} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";

type Props = { className?: string };

function Home({className}: Props) {
    return (
        <div className={cn(className)}>
            <h1 className={"text-2xl mb-10"}>Okay</h1>
            <Button>Hi mom</Button>
        </div>
    );
}

export default Home;
