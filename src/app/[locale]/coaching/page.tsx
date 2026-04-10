"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Target,
  FileText,
  MessageSquare,
  Users,
  Calendar,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Shield,
  Phone,
} from "lucide-react";

const SERVICES = [
  {
    key: "career",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    price: "Kostenlos*",
  },
  {
    key: "application",
    icon: FileText,
    color: "from-emerald-500 to-emerald-600",
    price: "Kostenlos*",
  },
  {
    key: "interview",
    icon: MessageSquare,
    color: "from-purple-500 to-purple-600",
    price: "49 EUR",
  },
  {
    key: "integration",
    icon: Users,
    color: "from-orange-500 to-orange-600",
    price: "Kostenlos",
  },
];

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function CoachingPage() {
  const t = useTranslations();
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = () => {
    if (selectedService && selectedDate && selectedTime) {
      setBookingSuccess(true);
      setTimeout(() => setBookingSuccess(false), 5000);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-white/80 text-sm">
              Professionelle Karriereberatung in Hessen
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("coaching.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            {t("coaching.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.key}
              onClick={() => setSelectedService(service.key)}
              className={`cursor-pointer group bg-white rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${
                selectedService === service.key
                  ? "border-primary shadow-lg"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t(`coaching.services.${service.key}.title`)}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {t(`coaching.services.${service.key}.description`)}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-primary">
                  {service.price}
                </span>
                {selectedService === service.key && (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted mb-12 text-center">
          * Kostenlos für Arbeitssuchende mit Vermittlungsgutschein der Agentur
          für Arbeit
        </p>

        {/* Booking Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-white rounded-3xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              {t("coaching.booking.title")}
            </h2>

            {bookingSuccess ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t("coaching.booking.success")}
                </h3>
                <p className="text-muted">
                  Wir senden dir eine Bestätigung per E-Mail.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("coaching.booking.selectType")}
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">Bitte wählen...</option>
                    {SERVICES.map((s) => (
                      <option key={s.key} value={s.key}>
                        {t(`coaching.services.${s.key}.title`)} — {s.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("coaching.booking.selectDate")}
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("coaching.booking.selectTime")}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-primary text-white"
                            : "bg-background text-muted hover:bg-primary/5 hover:text-primary"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("coaching.booking.notes")}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Beschreibe kurz dein Anliegen..."
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleBooking}
                  disabled={!selectedService || !selectedDate || !selectedTime}
                  className="w-full py-4 bg-secondary hover:bg-secondary-light disabled:bg-muted disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {t("coaching.booking.confirm")}
                </button>
              </div>
            )}
          </div>

          {/* Info Side */}
          <div className="space-y-6">
            {/* Why Coaching */}
            <div className="bg-white rounded-3xl border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Warum Coaching bei JobPilot?
              </h3>
              <ul className="space-y-4">
                {[
                  "Zertifizierte Karriereberater mit Branchenerfahrung",
                  "Individuelle Betreuung — kein Massencoaching",
                  "Kostenlos mit Vermittlungsgutschein",
                  "Online oder vor Ort in Wiesbaden",
                  "Nachbetreuung bis zum erfolgreichen Jobstart",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-primary/5 rounded-3xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
              <blockquote className="text-foreground italic mb-4">
                &ldquo;Dank des Coachings bei JobPilot habe ich innerhalb von 3
                Wochen eine neue Stelle als Projektmanagerin in Frankfurt
                gefunden. Die Bewerbungshilfe war Gold wert!&rdquo;
              </blockquote>
              <p className="text-sm text-muted">
                — Maria K., Projektmanagerin, Frankfurt
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-3xl border border-border p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Fragen? Ruf uns an!
              </h3>
              <a
                href="tel:+4961112345678"
                className="flex items-center gap-3 text-primary font-semibold text-lg hover:text-primary-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                +49 611 123 456 78
              </a>
              <p className="text-sm text-muted mt-2">Mo–Fr: 9:00–18:00 Uhr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
