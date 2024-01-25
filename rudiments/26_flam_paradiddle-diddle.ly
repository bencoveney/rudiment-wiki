\version "2.22.1"

rudiment = \drummode {
  \repeat unfold 2 {
    \tuplet 3/2 { \grace sn8^\markup { \teeny L }(sn8^"R") sn8^"L" sn8^"R" } \tuplet 3/2 { sn8^"R" sn8^"L" sn8^"L" }
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