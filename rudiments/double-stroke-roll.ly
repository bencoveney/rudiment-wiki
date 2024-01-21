\version "2.22.1"

rudiment = \drummode {
  \repeat unfold 4 {
    sn16^"R" 16^"R" sn16^"L" 16^"L"
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