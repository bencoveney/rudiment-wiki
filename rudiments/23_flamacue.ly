\version "2.22.1"

rudiment = \drummode {
  \grace sn16^"R"(sn16^"L") 16^"R"-> sn16^"L" 16^"R" \grace sn16^"R"(4^"L") \grace sn16^"L"(sn16^"R") 16^"L"-> sn16^"R" 16^"L" \grace sn16^"L"(4^"R")
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