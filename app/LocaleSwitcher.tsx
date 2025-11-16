import { useExtracted, useLocale } from "next-intl";
import LocaleSwitcherSelect from "@/app/LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useExtracted();
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: "English",
        },
        {
          value: "vi",
          label: "Tiếng Việt",
        },
      ]}
      label={t("Language")}
    />
  );
}
