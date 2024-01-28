\version "2.22.1"

rudiment = \drummode {
  sn8^"R" \grace {sn16^\markup { \teeny L } sn16^\markup { \teeny L }( } sn8^"R") \grace {sn16^\markup { \teeny L } sn16^\markup { \teeny L }( } sn16^"R") sn16^"L" sn16^"R" sn16^"R"
  sn8^"L" \grace {sn16^\markup { \teeny R } sn16^\markup { \teeny R }( } sn8^"L") \grace {sn16^\markup { \teeny R } sn16^\markup { \teeny R }( } sn16^"L") sn16^"R" sn16^"L" sn16^"L"
}

\score {
  <<
    \new DrumStaff <<
      \new DrumVoice {
        \override Score.SystemStartBar.collapse-height = #-inf.0
        \omit Staff.TimeSignature
        \omit Staff.Clef
        \override TextScript.Y-offset = 6
        \stemUp
        \rudiment
      }
    >>
  >>

  \layout {
    ragged-last = ##f
  }
}