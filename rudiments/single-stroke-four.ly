\version "2.22.1"

rudiment = \drummode {
  \repeat unfold 2 {
    \tuplet 3/2 { sn8^"R" sn8^"L" sn8^"R" } sn4^"L"
  }
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