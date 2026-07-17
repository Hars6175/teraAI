
import ModelConfigurationV2 from "@/components/ModelConfigurationV2";
import { SETTINGS_DOCUMENTATION_URLS } from "@/constants/documentation";

export default function ServiceConfigurationPage() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 animate-in fade-in duration-500">
            {/* The ModelConfigurationV2 component handles its own header and layout internally,
                so we just provide the responsive shell here. */}
            <ModelConfigurationV2 docsUrl={SETTINGS_DOCUMENTATION_URLS.modelOverrides} />
        </div>
    );
}
