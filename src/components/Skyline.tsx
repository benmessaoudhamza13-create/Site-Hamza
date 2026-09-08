/**
 * Skyline de Montréal au trait, d'ouest en est : mont Royal et sa croix,
 * 1000 De La Gauchetière, Place Ville Marie, Tour CIBC, Tour de la Bourse,
 * Biosphère, stade olympique et pont Jacques-Cartier.
 */
export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 320"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Mont Royal */}
      <path d="M 0 262 C 60 236, 120 214, 190 208 C 250 204, 300 214, 350 236 C 380 248, 410 258, 440 262" />
      <path d="M 40 258 C 90 244, 130 232, 170 228" strokeOpacity="0.5" />
      {/* Croix du mont Royal */}
      <path d="M 186 208 V 178 M 176 188 H 196" strokeWidth="2" />
      {/* Arbres discrets */}
      <path d="M 250 222 l 6 -14 l 6 14 M 256 222 v 6 M 300 232 l 5 -12 l 5 12 M 305 232 v 6" strokeOpacity="0.6" />

      {/* Immeubles ouest */}
      <path d="M 420 262 V 226 H 446 V 262" />
      <path d="M 452 262 V 210 H 470 V 262" />
      <path d="M 458 216 H 464 M 458 226 H 464 M 458 236 H 464 M 458 246 H 464" strokeOpacity="0.55" />

      {/* 1000 De La Gauchetière (toit pointu, retraits) */}
      <path d="M 486 262 V 150 L 500 138 L 514 150 V 262" />
      <path d="M 476 262 V 190 H 486 M 514 190 H 524 V 262" />
      <path d="M 500 138 V 118" />
      <path d="M 492 160 H 508 M 492 176 H 508 M 492 192 H 508 M 492 208 H 508 M 492 224 H 508 M 492 240 H 508" strokeOpacity="0.5" />

      {/* Tour CIBC */}
      <path d="M 540 262 V 160 H 566 V 262" />
      <path d="M 546 170 V 254 M 553 170 V 254 M 560 170 V 254" strokeOpacity="0.4" />

      {/* Place Ville Marie (plan cruciforme, antenne) */}
      <path d="M 596 262 V 128 H 612 V 116 H 636 V 128 H 652 V 262" />
      <path d="M 612 128 V 262 M 636 128 V 262" strokeOpacity="0.5" />
      <path d="M 624 116 V 84 M 618 96 H 630" strokeWidth="1.8" />
      <path d="M 602 150 H 646 M 602 180 H 646 M 602 210 H 646 M 602 240 H 646" strokeOpacity="0.45" />

      {/* Tour de la Bourse */}
      <path d="M 676 262 V 140 H 716 V 262" />
      <path d="M 684 140 V 262 M 696 140 V 262 M 708 140 V 262" strokeOpacity="0.4" />
      <path d="M 676 150 H 716 M 676 200 H 716 M 676 250 H 716" strokeOpacity="0.4" />

      {/* Immeubles moyens */}
      <path d="M 730 262 V 200 H 752 V 262 M 758 262 V 214 H 780 V 262 M 786 262 V 226 H 804 V 262" />
      <path d="M 736 210 H 746 M 736 224 H 746 M 736 238 H 746 M 764 224 H 774 M 764 240 H 774" strokeOpacity="0.5" />

      {/* Biosphère */}
      <path d="M 836 262 A 34 34 0 0 1 904 262" />
      <path d="M 842 250 Q 870 212 898 250 M 850 262 Q 870 220 890 262 M 836 262 H 904" strokeOpacity="0.55" />
      <path d="M 870 228 V 262" strokeOpacity="0.4" />

      {/* Stade olympique (tour inclinée + toit) */}
      <path d="M 940 262 C 950 258, 1000 254, 1060 258 C 1080 259, 1090 260, 1100 262" />
      <path d="M 1000 254 C 1000 236, 1010 224, 1030 218 C 1040 214, 1050 214, 1060 218" />
      <path d="M 1040 260 C 1050 220, 1074 178, 1108 148 L 1114 154 C 1082 186, 1062 226, 1054 262" />
      <path d="M 1108 148 C 1102 154, 1096 158, 1090 160" strokeOpacity="0.6" />

      {/* Pont Jacques-Cartier */}
      <path d="M 1120 262 V 236 H 1128 V 262 M 1180 262 V 236 H 1188 V 262" />
      <path d="M 1100 246 H 1200" />
      <path d="M 1124 236 C 1140 214, 1168 214, 1184 236" />
      <path d="M 1124 236 C 1132 230, 1144 226, 1154 224 M 1184 236 C 1176 230, 1164 226, 1154 224" strokeOpacity="0.5" />
      <path d="M 1134 246 V 233 M 1144 246 V 228 M 1154 246 V 224 M 1164 246 V 228 M 1174 246 V 233" strokeOpacity="0.5" />

      {/* Fleuve */}
      <path d="M 0 268 H 1200" strokeOpacity="0.6" />
      <path d="M 40 284 C 90 280, 130 288, 180 284 S 270 280, 320 284" strokeOpacity="0.35" />
      <path d="M 560 290 C 610 286, 650 294, 700 290 S 790 286, 840 290" strokeOpacity="0.35" />
      <path d="M 960 284 C 1010 280, 1050 288, 1100 284 S 1160 280, 1200 284" strokeOpacity="0.35" />
    </svg>
  );
}
