\version "2.22.1"

rudiment = \drummode {
  sn16^"R" sn16^"R" sn16^"L" sn16^"L" sn16^"R" sn16^"R" sn16^"L" sn16^"L" sn4^"R" r4
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