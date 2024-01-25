\version "2.22.1"

rudiment = \drummode {
  \repeat unfold 2 {
    \grace sn16^\markup { \teeny L }(sn16^"R") 16^"L" sn16^"R" 16^"R" \grace sn16^\markup { \teeny R }(sn16^"L") 16^"R" sn16^"L" 16^"L"
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