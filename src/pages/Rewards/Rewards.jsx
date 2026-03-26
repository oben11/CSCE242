import Hero from "../../componets/Hero";
import HowItWorks from "./componets/HowItWorks";
import MemberBenefits from "./componets/MemberBenefits";
import MembershipTiers from "./componets/MembershipTiers";
import StarRedemption from "./componets/StarRedemption";
import RewardsCTA from "./componets/RewardsCTA";

export default function Rewards() {
    return (
        <>
            <title>Rewards Program - Ollie's Coffee Company</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap"
                rel="stylesheet"
            />

            <Hero
                title="Ollie's Rewards Program"
                description="Join our rewards program and start earning stars..."
                buttons={[{ label: "Join Now - It's Free!", to: "#", style: "primary" }]}
            />

            <HowItWorks />
            <MemberBenefits />
            <MembershipTiers />
            <StarRedemption />
            <RewardsCTA />
        </>
    );
}