\version "2.22.1"

rudiment = \drummode {
  \repeat unfold 8 {
    sn16^"R" 16^"L"
  }
}

\score {
  <<
    \new DrumStaff <<
      \override Score.SystemStartBar.collapse-height = #-inf.0
      \omit Staff.TimeSignature
      \omit Staff.Clef
      \new DrumVoice {
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