import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";

export const metadata = {
    title: "Vehicle Management Solution | RFID Smart System",
    description: "RFID-based parking access control and automated fleet identification.",
};

const benefits = [
    { title: "Automated Access Control", desc: "Grant or deny vehicle access automatically." },
    { title: "Fleet Identification", desc: "Identify vehicles instantly with RFID tags." },
    { title: "Parking Management", desc: "Manage parking spaces and track vehicle movements." },
    { title: "Toll Collection", desc: "Automate toll collection with RFID transponders." },
];

const useCases = [
    "Corporate parking lot management",
    "Gated community vehicle access",
    "Fleet vehicle identification",
    "Toll road systems",
    "Car rental facility management",
    "Airport parking management",
];

export default function VehicleManagementPage() {
    return (
        <SolutionPageTemplate
            title="Vehicle Management"
            subtitle="VEHICLE SOLUTION"
            description="RFID-based parking access control and automated fleet identification systems. Our vehicle management solution streamlines access control and improves security."
            benefits={benefits}
            useCases={useCases}
        />
    );
}