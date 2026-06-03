import { useLocale } from "../i18n/useLocale";

export function PhoneMockup() {
  const { t } = useLocale();

  return (
    <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[460px]" aria-label={t.phone.ariaLabel}>
      <div className="relative mx-auto aspect-[10/19] w-[min(70vw,280px)] rounded-[2.2rem] border-[10px] border-anthracite bg-anthracite shadow-phone sm:w-[min(72vw,320px)] lg:w-[min(32vw,340px)]">
        <div className="absolute left-1/2 top-3 h-1.5 w-24 -translate-x-1/2 rounded-full bg-white/25" />
        <div className="h-full overflow-hidden rounded-[1.55rem] bg-[#FDFDFB]">
          <div className="bg-anthracite px-5 pb-6 pt-9 text-white">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">{t.brand}</span>
              <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold">{t.phone.status}</span>
            </div>
            <h2 className="mt-6 text-2xl font-bold leading-tight tracking-normal">{t.phone.jobTitle}</h2>
            <p className="mt-2 text-sm text-white/70">{t.phone.customer}</p>
          </div>
          <div className="space-y-4 p-5">
            <div className="rounded-lg border border-anthracite/10 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{t.phone.report}</span>
                <span className="text-xs font-medium text-primary">{t.phone.pdfReady}</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="aspect-square rounded-md bg-primary/15">
                    <div className="h-full rounded-md border border-primary/15 bg-[linear-gradient(135deg,rgba(194,92,26,.28),rgba(45,45,45,.08))]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-anthracite/10 bg-white p-4 shadow-sm">
              <span className="text-sm font-semibold">{t.phone.checklist}</span>
              <div className="mt-3 space-y-3">
                {t.phone.checklistItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
              <span className="text-sm font-semibold text-primary">{t.phone.nextStep}</span>
              <p className="mt-1 text-sm text-anthracite/75">{t.phone.nextStepDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
