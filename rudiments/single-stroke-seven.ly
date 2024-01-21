\version "2.22.1"

rudiment = \drummode {
  \tuplet 3/2 { sn8^"R" sn8^"L" sn8^"R" } \tuplet 3/2 { sn8^"R" sn8^"L" sn8^"R" } sn4^"L" r4
}

\score {
  <<
    \new DrumStaff <<
      \override Score.SystemStartBar.collapse-height = #-inf.0
      \omit Staff.TimeSignature
      \omit Staff.Clef
      \new DrumVoice { \stemUp \rudiment }
    >>
  >>

  \layout {
    ragged-last = ##f
  }
}