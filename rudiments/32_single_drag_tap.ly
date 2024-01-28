\version "2.22.1"

rudiment = \drummode {
  \repeat unfold 2 {
    \grace {sn16^\markup { \teeny L } sn16^\markup { \teeny L }( } sn8^"R") sn8^"L"
    \grace {sn16^\markup { \teeny R } sn16^\markup { \teeny R }( } sn8^"L") sn8^"R"
  }
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