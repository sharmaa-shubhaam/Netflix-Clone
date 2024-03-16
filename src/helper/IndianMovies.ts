const indianMovies: (string | undefined)[] = [
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfuSDd5DLc9ajewDQq2QjkbKEAveq9ZVQKi-iIU2PrL23pUdN74v6guuAN5uTRvFDDM0LB4o5nhRGAoAjw1VMwmAnMwplsajq8U.webp?r=b5c",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTeJHU_KCy6ygReSMC93Xl3Y727Kkht0emKLJ7EO4yAnAgGB7NmlveK3ggVuebY8NufhLDJ01oqlDz8RscCHDEoQmcOhg-IewGI.webp?r=f74",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcX_IizMEdZiI7LWgNhXmN1QblzEeg__tR_AmvamgcpwEwp-XqIYW9YueCK3Id8C690gS0ew2-melOcahlXnG7t5MOAvZucyq8Q.webp?r=cfe",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU393H9Y41LcL2Wk3SCMMH-gDa76O9EdHulROKvH0VRqpfIgF8sihpFmLxBfUo4c8rt0rFVhSRuh_ZsRM1BlXgWkSxY2Rd6BnFI.webp?r=88e",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSXIsLfuRIgGyeMr2-MeyEbhJ9f0us7IJ0bKQbtRhqHOtYdb42sUzpz2VM3RmmoJ6UML9zAObsD-m-dhcw4WJu8FTq2DCcQKnkI.webp?r=14f",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc8L3XkO2v_h8Hz8_qJvq_OmEmz3WnDViA8aJnGdHsnpdvz8jME9RmNmDFpuwC-rGPvXs2OF0ZM4EwrWQlDI6MAhmoYinF9x12E.webp?r=b76",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcFyLkkdyUqXIwRjXYC8AiUAOL79WCH5zilC24eeZE7RNcIL9pV6qz3AfoDn77LNRVXA_U6AbkrA9vWbLX7dhYxEwcKN_3Ahafc.webp?r=a35",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfl_uxg2sC8Llf1OJtjq4ZmJ8gq7sBRxz7H9-OWv33MmU7W1MAuMHPINsyWyAwJyeN9WAFcC-RpokWlCkp5truhvdn6iIu9I6Ro.webp?r=6a3",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY3iad58zERr_zr0NeZHErKbInn1_DkDh-Mh0HOBCSD11z-gUwbdbMmZSu5seo7JJS2eRUpTnDJd2uJJv9JWaMkiF_U74lxW2a8.webp?r=098",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTKhb77dfFwRhsDUDN_9vJd2TxOxPYxCQpdP6-3mnv2Z4fuzRHobShL_RyB39nKu0DWRYgjU5EHYjESTuK5pZaJ9DkXze9u1ty8.webp?r=b82",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUOO9JBXzO3wZDKwcW-e5k5IVuPokxOJX22eoBxpaK7dSKTm5ZDcs93M-uPP24t9jK6ecO9vNaRQDjbAm-MWc07xw1yujuXTGp0.webp?r=4e4",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQUO5SslQLlr_F1fmpEpaaGndCSzbBrzYBEnqszVTWJ8k0fJMANM3sdpybqx-fa7eWOCIpEtgpyAq9Vtqcz3DFX-9fIkfto-iJM.webp?r=0c9",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYJrtLftHNamEo7Bci11Ns9vug7ck_Vcrm6iTQWziSqXDym8poBy2mx2xQgE06YEPxqrflyBd6aORvNj6hVLTUt8GsxR6gkV3og.webp?r=cb4",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbiq9cEcKyIZ_euonV5z58pBz2amn8E9h1VIz3INfNwyNCDaWb7_pQpy4kHkwA3CP-epUMozytyT2ZMCRfB8c3TpchHfJvHcLcFMByt7qDRZrCrbbH-ZaKQ9P3OcMWIKjLLU.jpg?r=f3e",
   ,
   "https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSxPlm1j72zDdvyLawjOMWclg3ByaC-Pl9EJc2nj2z12nvZnAVy9KqhgVuFhQMTinT23kqs1ym2QE1FryzOzRQWuqvWvwBRxjgE.webp?r=466",
];

export default indianMovies;